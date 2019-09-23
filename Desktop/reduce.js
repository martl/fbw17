$_$wp(1);
const classMates = ($_$w(1, 0), [
    {
        firstName: 'Nic',
        lastName: 'Solitom',
        age: 32
    },
    {
        firstName: 'Naima',
        lastName: 'Adan Ahmed',
        age: 29
    },
    {
        firstName: 'Davide',
        lastName: 'de Feudis',
        age: 35
    },
    {
        firstName: 'Balazs',
        lastName: 'Danyadi',
        age: 33
    },
    {
        firstName: 'Givara',
        lastName: 'Mahfoud',
        age: 25
    },
    {
        firstName: 'Maria',
        lastName: 'Nanakou',
        age: 40
    },
    {
        firstName: 'Mojgan',
        lastName: 'Vafa',
        age: 23
    },
    {
        firstName: 'Ion',
        lastName: 'Lazarev',
        age: 30
    },
    {
        firstName: 'Christophe',
        lastName: 'Troudart',
        age: 23
    },
    {
        firstName: 'Karol',
        lastName: 'Polakowski',
        age: 30
    },
    {
        firstName: 'Bianca',
        lastName: 'Richa',
        age: 33
    },
    {
        firstName: 'Hassan',
        lastName: 'Abu Shawish',
        age: 34
    }
]);
const wheresMojgan3 = ($_$w(1, 1), classMates.reduce((hasMojgan, student) => {
    $_$wf(1);
    if ($_$w(1, 2), student.firstName === 'Mojgan') {
        return $_$w(1, 3), student;
    }
    $_$w(1, 4), $_$tracer.log(student, 'student', 1, 4);
    $_$w(1, 5), $_$tracer.log(hasMojgan, 'hasMojgan', 1, 5);
    return $_$w(1, 6), hasMojgan ? ($_$w(1, 7), true) : ($_$w(1, 8), false);
}, false));
$_$w(1, 9), $_$tracer.log(wheresMojgan3, 'wheresMojgan3', 1, 9);
$_$wpe(1);