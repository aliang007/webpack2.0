<div class="header">
    <h1>我是 <%= name %> ~~</h1>
    <img src="${ require('../../assets/1.jpg') }" width="50" alt="">
    <ul>
        <% for (var i = 0; i< arr.length; i++){ %>
        <li><%= arr[i] %></li>
        <% } %>
    </ul>
    <div class="img"></div>
</div>