async function foo() {
  try {
    // Fetching memes from the API
    let response = await fetch("https://api.imgflip.com/get_memes");

    // Checking if the fetch operation was successful
    if (!response.ok) {
      throw new Error("Failed to fetch memes");
    }

    // Parsing the response as JSON
    let data = await response.json();

    // Extracting the memes array from the response data
    let memes = data.data.memes;

    // Checking if memes array is empty
    if (!memes || memes.length === 0) {
      throw new Error("No memes found");
    }

    // Generating a random index to select a meme from the array
    let randomIndex = Math.floor(Math.random() * memes.length);

    // Getting the URL of the randomly selected meme
    let memeUrl = memes[randomIndex].url;

    // Creating HTML elements for the meme container
    let container = document.createElement("div");
    container.className = "container";

    let row = document.createElement("div");
    row.className = "row";

    let col = document.createElement("div");
    col.className = "col";

    let heading = document.createElement("div");
    heading.className = "head";
    heading.innerHTML = `<h1>Random Meme Template Generator</h1>`;

    let memeImage = document.createElement("img");
    memeImage.className = "img-fluid img-size";
    memeImage.src = memeUrl;
    memeImage.alt = "meme";

    let breakinp = document.createElement("br")
    let generateButton = document.createElement("button");
    generateButton.className = "btn btn-danger";
    generateButton.textContent = "Generate";

    // Adding event listener to reload the page when button is clicked
    generateButton.addEventListener("click", function () {
      window.location.reload();
    });

    // Appending elements to construct the meme container
    col.append(heading, memeImage, breakinp,generateButton);
    row.append(col);
    container.append(row);
    document.body.append(container);
  } catch (error) {
    // Logging any errors that occur during execution
    console.error(error);
  }
}

// Calling the foo function to start the meme generation process
foo();
