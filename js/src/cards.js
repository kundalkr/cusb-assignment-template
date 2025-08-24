let octal_to_another = document.getElementsByClassName("octal_to_another");

for (let index = 0; index <= octal_to_another.length; index++) {
  octal_to_another[index].innerHTML = ` <br>
    <div class="card" style="width: 18rem">
      <div class="card-header bg-success text-white text-center">
        <p class="h4">Jump To Question</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item bg-success bg-opacity-50 text-center">
          <a href="octaltodecimal1.html" class="btn btn-link"
            >Octal To Decimal</a
          >
        </li>
        <li class="list-group-item bg-success bg-opacity-50 text-center">
          <a href="decimaltoOctal1.html" class="btn btn-link"
            >Decimal To Octal
          </a>
        </li>
        <li class="list-group-item bg-success bg-opacity-50 text-center">
          <a href="decimaltohexadecimal1.html" class="btn btn-link"
            >Decimal To hexadecimal
          </a>
        </li>
      </ul>
    </div><br>`;
}
const decimal_to_another =
  document.getElementsByClassName("decimal_to_another");

for (let indexi = 0; indexi <= decimal_to_another.length; indexi++) {
  decimal_to_another[
    indexi
  ].innerHTML = ` <br>  <div class="card" style="width: 18rem">
      <div class="card-header bg-success text-white text-center">
        <p class="h4">Jump To Question</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item bg-success bg-opacity-50 text-center">
          <a href="decimaltobinary.html" class="btn btn-link"
            >Decimal To Binary</a
          >
        </li>
        <li class="list-group-item bg-success bg-opacity-50 text-center">
          <a href="decimaltoOctal1.html" class="btn btn-link"
            >Decimal To Octal
          </a>
        </li>
        <li class="list-group-item bg-success bg-opacity-50 text-center">
          <a href="decimaltohexadecimal1.html" class="btn btn-link"
            >Decimal To hexadecimal
          </a>
        </li>
      </ul>
    </div><br>`;
}

