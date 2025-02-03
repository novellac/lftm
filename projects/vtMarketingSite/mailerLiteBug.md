static git:(master) ./tools/deploy.sh dev
+ case $1 in
+ TARGET=dev
+ DOMAIN=dev-static.voicethread.net
++ dirname ./tools/deploy.sh
+ cd ./tools/..
+ hugo -b https://dev-static.voicethread.net
Start building sites … 
hugo v0.119.0-b84644c008e0dc2c4b67bd69cccf87a41a03937e+extended darwin/amd64 BuildDate=2023-09-24T15:20:17Z VendorInfo=brew

WARN  found no layout file for "html" for kind "page": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.
WARN  found no layout file for "html" for kind "section": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.

                   |  EN   
-------------------+-------
  Pages            | 2183  
  Paginator pages  |   88  
  Non-page files   |    0  
  Static files     | 1825  
  Processed images |    0  
  Aliases          |   10  
  Sitemaps         |    1  
  Cleaned          |    0  

Total in 8347 ms
+ hugo deploy --target=dev
Deploying to target "dev" (s3://dev-static.voicethread.net?region=us-east-1)
Error: blob (code=Unknown): InvalidAccessKeyId: The AWS Access Key Id you provided does not exist in our records.
        status code: 403, request id: RESVVZE6HNT5T6V6, host id: 8SjtbUFEv1LmXinby5/qzfluHeApAAbJlq+L/x9hdn23rfV+vEkLb1u/KJdBdz8pcvM1m8GfwxU=
➜  static git:(master) 
 *  History restored 

➜  static git:(master) 

FIX: It turns out the creds in AWS had been deleted. AQ created new creds, loaded those to 1pass, and I ran the same steps in the readme which passed this time.