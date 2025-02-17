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
                // totalCell.colspan = "1";
				tcell.setAttribute("id","ans")
                tCell.textContent = "Total Price: Rs " + total;
                
                tRow.appendChild(tCell);
                table.appendChild(tRow);
  
};

Btn.addEventListener("click", getSum);

