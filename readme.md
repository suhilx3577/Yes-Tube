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



# CUSTOM HOOKS
# 1) useRelatedVideos;
-> It is used in <MinorWatch/> to render the related video-cards on the right side.
-> By default it is using the channelid to get related videos
-> we can alter it to get videos by using video_id
    * with the useSearchParams Option we get the video_id 
    * we can use the video_id in the first URL Mentioned in code

# 2) 