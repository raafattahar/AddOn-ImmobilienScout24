# [Immobilien Scout 24](https://www.immobilienscout24.de/)
(This is for personal use)

When I was looking for a place in Frankfurt, I was always using **_Immobilien Scout 24_**.

But it was so annoying that after starting the search, I could not see when the apartments would be available unless I click on that link and to see more details.

Or when I select a place to see in details, I had to scroll down or up every time I wanted to check for the cold or total rent.

Therefore, I decided to build a small add-on on Mozilla-Firefox to help me look up for a place, quickly and efficiently.

To integrate the plug-in inside the browser:  
* Type [about:debugging](https://developer.mozilla.org/en-US/docs/Tools/about:debugging) in the URL  
* Check the "Enable add-on debugging" box  
* Click on "Load Temporary Add-on"
* Choose the manifest.json
* The add-on should appear in the list of the **temporary extentions**

now do your search as usual and just wait for it :)

* **immobilienscout_ShowExposeInfo** : The important details (in my opinion) of an apartment will be always shown on the top right.
* **immobilienscout_ShowInfoInsideSearch** : will show more details of the results, inside the result itself. This search is a bit expensive and need a bit more time to be shown.