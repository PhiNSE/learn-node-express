const promise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulate a success or failure.
            if (success) {
                resolve('Operation succeeded'); // Resolve the promise with a value.
            } else {
                reject('Operation failed'); // Reject the promise with a reason.
            }
        }, 2000);
    }
);

promise
    .then((value) => {
        console.log(value);
        return value + ' - Passed to next then';
    })
    .then((value) => {
        console.log(value);
        return value + ' - And again 1';
    }).then((value) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(value);
                resolve(value + ' - And again 2');
            }, 3000);
        });
    }).then((value) => {
        console.log(value);
        return value + ' - And again 3';
    })
    .catch((err) => {
        console.log(err);
    });

console.log('end');