window.addEventListener("load", initSite)

function initSite() {
    //console.log("init")
    document.getElementById("blogContent").innerHTML=""
    getblogContent()
  
}
//let blogContent =""

function getblogContent() {

    blogList.forEach((, index) => {
        console.log(blogList)
      
        let blogBox = document.createElement("div")
        blogBox.classList.add("blogBox")
        blogBox.style.width = "100px"
        blogBox.style.height = "100px"
        blogBox.style.backgroundColor = "grey"

        let blogTitle = document.createElement("h3")
        blogTitle.innerText = "Blog titel" //blog.title

        let blogDate = document.createElement("p")
        blogDate.innerText = "2020-04-06"

        let blogImage = document.createElement("img")
        blogImage.innerHTML = "blog image" //blog.img

        let blogText = document.createElement("h5")
        blogText.innerText = "blog text" //blog.text 

        blogBox.append(blogTitle, blogDate, blogImage, blogText)

    mainElement.append(blogBox)
    });

}

function getBlogInputs() {

}

let blogContent = [
    {
        blogTitle: "Blog 1",
        blogDate: "2021-04-06",
        blogImage: "./image/",
        blogText: "Här skrivs bloggen"
    }, {
        blogTitle: "Blog 2",
        blogDate: "2021-04-06",
        blogImage: "./image/",
        blogText: "Här skrivs bloggen"

    }, {
        blogTitle: "Blog 3",
        blogDate: "2021-04-06",
        blogImage: "./image/",
        blogText: "Här skrivs bloggen"
    }
]

localStorage.setItem("blogList", JSON.stringify(blogContent))
/* mainElement()

function renderBlogContent() {
    mainElement.innerHTML = ""

    let blogListContainer = document.createElement("div")
    blogListContainer.classList.add("blogContainer")
    blogListContainer.id = "blogListContainer"

    let blogFormContainer = document.createElement("div")
    blogFormContainer.classList.add("blogContainer")

    let addBlogTitle = document.createElement("h2")
    addBlogTitle.innerText = "Skapa nytt Bloginlägg!"

    let titleInput = document.createElement("input")
    titleInput.id = "titleInput"
    titleInput.placeholder = "Rubrik"
    titleInput.classList.add("blogInput")

    let textInput = document.createElement("textarea")
    textInput.id = "textInput"
    textInput.placeholder  = "Skriv nytt bloginlägg här..."
    textInput.classList.add("blogInput")

    let submitBtn = document.createElement("button")
    submitBtn.innerText = "Spara"

    submitBtn.addEventListener("click", saveBlogInput)

    blogFormContainer.append(addBlogTitle, titleInput, textInput, submitBtn)
    mainElement.append(blogFormContainer, blogListContainer)

    printBlog()
}

function printBlog() {
    const blogList = getBlog()
    const blogListContainer = document.getElementById("blogListContainer")
    blogListContainer.innerHTML = ""

    blogList.forEach((blog, index) => {
        let blogBox = document.createElement("div")
        blogBox.classList.add("blogBox")

        let dateElement = document.createElement("p")
        dateElement.innerText = blog.date

        let titleElement = document.createElement("h3")
        titleElement.innerText = blog.title

        let textElement = document.createElement("h5")
        textElement.innerText = blog.textElement

        let deleteButton = document.createElement("button")
        deleteButton.innerText = "Ta bort"
        deleteButton.addEventListener("click", () => {
            deleteBlog(index)
        })

        blogBox.append(dateElement, titleElement, textElement, deleteButton)
        blogListContainer.appendChild(blogBox)
    })

} */

