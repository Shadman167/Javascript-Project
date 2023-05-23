
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

  var categories2 = [];

  fetch("CategoryItems.json").then(response => response.json()).then(

    data => {
        categories2 = data;
        
        const monthDiv = document.getElementById("smallBoxesBox");
        const createdRootDiv2 = document.createElement("div");
        createdRootDiv2.classList.add("boxStyle");
        

         
        
        let categoryDiv2 = '';
        categories2.forEach((boxStyle, index) => {

          
             
          
          categoryDiv2 += `

                
            <div id=${index} class="smallBoxesContainer">
            
                <div class="smallBoxes" style="display: flex; flex-direction: row; flex-wrap: wrap;">
                  <div style="height: 5%; width:100%; color: #828282; font-family: Arial, serif; padding-left: 4%; padding-top:2%;">Category Name</div>
                  <div style="height: 20%; width:100%; size: 20px; padding-left: 4%; padding-top: 5%">${boxStyle?.name}</div>

                  <div style="height: 15; width:100%; color: #828282; font-family: Arial, serif; padding-left: 4%;">In Stock</div>
                  
                  
                  <div class="progressBar"style="height: 5%; width:90%; color: #828282; font-family: Arial, serif;">
                    <div style="width:${calculateWidth(boxStyle?.itemsInStock,boxStyle?.totalItems)};background:${determineColor(boxStyle?.itemsInStock, boxStyle?.totalItems)};height:100%;border-radius: 10px;padding-left: 4%;">

                      </div>
                    </div>
                  
                  
                  <div style="height: 20%; width:100%; color: #828282; font-family: Arial, serif; padding-left: 4%;">${boxStyle?.itemsInStock}/${boxStyle?.totalItems}</div>
                 

                    

                    

                </div>

            </div>

            
            `
        });

        createdRootDiv2.innerHTML = categoryDiv2;
        monthDiv.appendChild(createdRootDiv2);
    });

    function calculateWidth (stock,total){
      let value = ((stock/total)*100).toFixed(2);
      value = value + '%';
      return value;
    }


    function determineColor(stock, total){

      let value = ((stock/total)*100).toFixed(2);

      if(value<60 && value>= 0){

        return 'red';
      }

      else if(value>= 60 & value <= 100){

        return 'green';
      }

    }


        
        
