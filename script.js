
var categories = [];

fetch("CategoryItems.json")
  .then(response => response.json())
  .then(data => {
    // Assuming the JSON data has an array of categories with a key named "categories"
    // debugger
    categories=data;
     
  
    const outputDiv = document.getElementById("inventoryItems");

    const createdRootDiv = document.createElement("div");
    createdRootDiv.classList.add("category");

    let categoryDiv = '';
    
    categories.forEach((category,index) => {
      categoryDiv += `
      <div style="width: 50%;" id=${index}>
        <div class="greenBoxes">

          <div style="color: white; padding-top: 2%; padding-left: 2%;">
            ${category?.name}
          </div>

          <div style="color: white; padding-top: 12%; padding-left: 2%;">
            Threshold - ${category?.threshold}
          </div>
        </div>
      </div>
      `
    });

    createdRootDiv.innerHTML = categoryDiv;
    outputDiv.appendChild(createdRootDiv);
  
  
  });


        
        
