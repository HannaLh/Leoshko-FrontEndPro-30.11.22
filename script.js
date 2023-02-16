'use strict'

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const post = document.getElementById('post');
const comments = document.getElementById('postComments');
const idInput = document.getElementById("user_input");

document.querySelector("#search").addEventListener("click", () => {
    if(validate()) {
    const user_input = document.querySelector("#user_input");
    request(user_input);
    }
})

const getPostCommentsByPostId = (id) => {
    const url = `${BASE_URL}/posts/${user_input.value}/comments`;
    fetch(url)
    .then((response) => response.json())
    .then((json) => comments.textContent = '\n' + JSON.stringify(json, '\t', 4));
}

const request = (user_input) => {
    const url = `${BASE_URL}/posts/${user_input.value}`;
    fetch(url)
    .then(response => {
        if (!response.ok) throw Error(response.statusText);
            return response.json();
    })
    .then(data => {
        document.querySelector("#isValid").textContent = "";
        post.textContent = '\n' + JSON.stringify(data, '\t', 2);
    })
    .catch(error => document.querySelector("#isValid").textContent = error);

    document.querySelector("#getComment").addEventListener("click", getPostCommentsByPostId);
}
