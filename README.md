# workout-generator

概述：用户可以通过前端界面，输入自己的个人信息（例如: 身高，体重 等，）和自己的健身经验，来让系统为他生成几套健身的计划，再通过前端发送信号给后端，后端生成得到数据后，再生成一个可以方便打卡


# docker
docker build -t test1 . <br>
docker run test1 <br>
docker run -p 3000:3000 my-web-server<br>
http://localhost:3000/<br>


# To DO
1. CSS 渲染问题 目前用了text-align 只能做到左边对齐，右边无法对其，感觉不是很美观的样子欸
2. Plan 这page 感觉略显多余，要是能在主页跳出来就好，现在先这样 (可以在主页跳 就是设计一个general的页面 然后点完submit只re-render特定区域就行)
3. 
