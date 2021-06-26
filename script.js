const ptag = document.getElementById('timing');

function changetimer(no) {
  ptag.textContent = no;
}

//calling func
function timer(number, callback = () => {}) {
  changetimer(number);

  setTimeout(() => {
    callback();
  }, 1000);
}
timer(10, () =>
  timer(9, () =>
    timer(8, () =>
      timer(7, () =>
        timer(6, () =>
          timer(5, () =>
            timer(4, () =>
              timer(3, () =>
                timer(2, () => timer(1, () => timer('independence day')))
              )
            )
          )
        )
      )
    )
  )
);
