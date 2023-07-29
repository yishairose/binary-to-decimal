const numberDisplay = document.querySelector('.number-display');
const form = document.querySelector('form');
const input = document.querySelector('input');
const alert = document.querySelector('.alert')

input.addEventListener('input', function () {
    numberDisplay.textContent = this.value;
    const value = input.value;
    if (value[value.length - 1] !== '0' && value[value.length - 1] !== '1') {
        alert.classList.add('alert-visible');
        setTimeout(
            function () {
                alert.classList.remove('alert-visible');
            }, 2000
        )
    }

})

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = input.value;

    for (let i = 0; i < value.length; i++) {
        if (value[i] !== '0' && value[i] !== '1') {
            alert.classList.add('alert-visible');
            setTimeout(
                function () {
                    alert.classList.remove('alert-visible');
                }, 2000
            )
            return
        }
    }
    let binaryInput = input.value;
    let n = binaryInput.length;
    let decimalValue = 0;
    for (let i = 0, e = n - 1; i < n; i++, e--) {
        decimalValue += binaryInput[i] * (2 ** e);
    }
    numberDisplay.textContent = decimalValue;
})