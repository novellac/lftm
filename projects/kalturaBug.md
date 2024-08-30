Filter request didn't return anything! the `filter=CommentModeration` part was supposed to return only the kaltura item named CommentModeration.

https://dev-rachel.voicethread.net/api/rest/mediaBrowser?id=kaltura/owned&filter=CommentModeration&limit=50&offset=0&useQuery=1&method=getList&client=vue&apiVersion=2024.01.16

---

Count request returns 400 (but still filtering)
https://dev-rachel.voicethread.net/api/rest/mediaBrowser?id=kaltura/owned&filter=CommentModeration&method=count&client=vue&apiVersion=2024.01.16
Count request returning 400 (no longer filtering)
https://dev-rachel.voicethread.net/api/rest/mediaBrowser?id=kaltura/owned&method=count&client=vue&apiVersion=2024.01.16
Response: Count method not found for this media browser.