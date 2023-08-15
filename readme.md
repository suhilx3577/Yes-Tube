# This is Clone of Youtube
-> Created React App without using npx-create-reactapp
-> Bundler - <Parcel>
-> CSS- <TailwindCSS>

# Tailwind Set Up
    1)  install tailwindcss -> npm i -D tailwindcss postcss
    2)  npx tailwindcss init
    3)  create .postcssrc file and add the following code
                            {
                                "plugins":{
                                    "tailwindcss":{}
                                }
                            }
    4)  include routes in content in the tailwind.config.js
                            content:["./src/**/*.js"]
    5)  create index.css and include the following code
                            @tailwind base;
                            @tailwind components;
                            @tailwind utilities;
    
    6)  include <link href="./index.css" rel="stylesheet"> in ur html file
    
    5)  Now you are all set to use the Tailwindcss



# install DOTENV for Private Keys and URLs


# COMPONENTS

1) <VIDEODESCRPT> Component
-> This component builds the description section in The <MajorWatch> Component.
-> It Builds Channel-Banner & Description-Banner in the DESCRIPTION SECTION.
-> It needs Details of Channel & Video.
-> First Video-Details is Fetched with help of VideoId and Then Channel-Details is Fetched.
    a) <GetVideoDetails> from this we get all video-details and set the channel-id
    b) from the channel-id we get the channel-details by using <GetChannelDetails>


# CUSTOM HOOKS
# 1) useRelatedVideos;
-> It is used in <MinorWatch/> to render the related video-cards on the right side.
-> By default it is using the channelid to get related videos
-> we can alter it to get videos by using video_id
    * with the useSearchParams Option we get the video_id 
    * we can use the video_id in the first URL Mentioned in code

# 2) useVideoDetails and useChannelDetails
-> It is used in <VideoDescrpt> Component to get the Video and Channel Details

-> First useVideoDetails is called and then useChannelDetails
# # useVideoDetail 
    * this takes videoId and Returns VideoDetails.
    * Along that it Dispatches ChangeCid to change channel id
# # useChannelDetails
    * this takes channelId and returns Channel-Details. channelId is subscribed to the STORE
    * Everytime the channelId is changed It Fetches the Channel-Details Again.


# 3) useQueryResults
-> it is used to get the Search Results and Store it in the Redux Store.
-> everytime the searchQuery is Changed, it is Invoked

# 4) useSearchSuggestion
-> it is used to get the data of search suggestions.
-> if passed in string it gives Search Suggestions of the String

# 5) useComment
-> it takes in the video id and returns the comments of the particular video