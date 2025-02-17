const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

	let prices = document.querySelectorAll(".price");
                let total = 0;
                
                prices.forEach(price => {
                    total += parseFloat(price.textContent) || 0;
                });
                
                let table = document.querySelector("table");
                let totalRow = document.createElement("tr");
                let totalCell = document.createElement("td");
                // totalCell.colspan = "1";
                totalCell.textContent = "Total Price: Rs " + total;
                
                totalRow.appendChild(totalCell);
                table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

