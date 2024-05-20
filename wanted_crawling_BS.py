import time
import requests
from bs4 import BeautifulSoup
from openpyxl import Workbook

BASE_URL = "https://www.wanted.co.kr/wd/"
URL_LIST = []

# Generate URLs
def MAKE_URL():
    for i in range(200000, 200100):
        URL = BASE_URL + str(i)
        URL_LIST.append(URL)

# Generate URLs
MAKE_URL()

# Initialize workbook
write_wb = Workbook()
write_ws = write_wb.active
columns = ["회사이름", "직무", "채용내용", "기술 스택 • 툴", "태그", "마감일"]
write_ws.append(columns)

# Scraping data
for i, URL in enumerate(URL_LIST):
    try:
        response = requests.get(URL)
        response.raise_for_status()  # Check if the request was successful
        soup = BeautifulSoup(response.text, 'html.parser')

        # Extract the necessary information using BeautifulSoup
        company_name = soup.select_one('#__next > main > div.JobDetail_contentWrapper__DQDB6 > div > section > header > div > div:nth-child(1) > a').get_text(strip=True) if soup.select_one('#__next > main > div.JobDetail_contentWrapper__DQDB6 > div > section > header > div > div:nth-child(1) > a') else 'N/A'
        jikmoo = soup.select_one('#__next > main > div.JobDetail_contentWrapper__DQDB6 > div > section > header > h1').get_text(strip=True) if soup.select_one('#__next > main > div.JobDetail_contentWrapper__DQDB6 > div > section > header > h1') else 'N/A'
        job_naeyong = soup.select_one('#__next > main > div.JobDetail_contentWrapper__DQDB6 > div > section > section > article.JobDescription_JobDescription__VWfcb').get_text(strip=True) if soup.select_one('#__next > main > div.JobDetail_contentWrapper__DQDB6 > div > section > section > article.JobDescription_JobDescription__VWfcb') else 'N/A'
        
        tech_stack = ', '.join([tech.get_text(strip=True) for tech in soup.select('ul.JobSkillTags_JobSkillTags__list__eEc2V li span')]) if soup.select('ul.JobSkillTags_JobSkillTags__list__eEc2V li span') else 'N/A'
        tags = ', '.join([tag.get_text(strip=True) for tag in soup.select('ul.CompanyTags_CompanyTags__wpSCo li span')]) if soup.select('ul.CompanyTags_CompanyTags__wpSCo li span') else 'N/A'
        deadline = soup.select_one('#__next > main > div.JobDetail_contentWrapper__DQDB6 > div > section > section > article.JobDueTime_JobDueTime__iKbEO > span').get_text(strip=True) if soup.select_one('#__next > main > div.JobDetail_contentWrapper__DQDB6 > div > section > section > article.JobDueTime_JobDueTime__iKbEO > span') else 'N/A'
        
        write_ws.append([company_name, jikmoo, job_naeyong, tech_stack, tags, deadline])
        
        time.sleep(1)  # Delay to prevent overwhelming the server
    except requests.RequestException as e:
        print(f"Failed to retrieve URL {URL}: {e}")
    except Exception as e:
        print(f"Failed to parse URL {URL}: {e}")

# Save the workbook
write_wb.save('example.xlsx')
