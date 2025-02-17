const Btn = document.createElement("button");
Btn.append("Get Total Price");
document.body.appendChild(Btn);

const getSum = () => {

	let prices = document.querySelectorAll(".price");
                let total = 0;
                
                prices.forEach(price => {
                    total += parseFloat(price.textContent);
                });
                
                let table = document.querySelector("table");
                let tRow = document.createElement("tr");
                let tCell = document.createElement("td");
                
				tCell.setAttribute("id","ans")
				// totalCell.colspan = "2";
                tCell.textContent = "Total Price: Rs " + total;
                
                tRow.appendChild(tCell);
                table.appendChild(tRow);
  
};

Btn.addEventListener("click", getSum);

