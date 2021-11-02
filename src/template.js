const generateMembers = teamData => {
    let page = ``;

    teamData.forEach(element => {
        if(element.getRole() === "Manager"){
            page = page + `
                <div class="col-sm-4">
                    <div class="card employee-card">
                        <div class="card-header">
                            <h2 class="card-title">${element.name}</h2>
                            <h3 class="card-title">Manager</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${element.id}</li>
                                <li class="list-group-item">Email: <span><a href="mailto:${element.email}">${element.email}</a></span></li>
                                <li class="list-group-item">Office Number: ${element.officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        }else if (element.getRole() === "Engineer"){
            page = page +  `
                    <div class="col-sm-4">
                    <div class="card employee-card">
                        <div class="card-header">
                            <h2 class="card-title">${element.name}</h2>
                            <h3 class="card-title">Engineer</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${element.id}</li>
                                <li class="list-group-item">Email: <span><a href="mailto:${element.email}">${element.email}</a></span></li>
                                <li class="list-group-item">GitHub: <span><a target="_blank" href="https://github.com/${element.github}">${element.github}</a></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        }else if (element.getRole() === "Intern"){
            page = page + `
                <div class="col-sm-4">
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${element.name}</h2>
                        <h3 class="card-title">Intern</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${element.id}</li>
                            <li class="list-group-item">Email: <span><a href="${element.email}">${element.email}</a></span></li>
                            <li class="list-group-item">School: ${element.school}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        } 
    });

    return page;
};

module.exports = templateData => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="container-header">
            <div class="row">
                <div class="col-md-12">
                    <h1>My Team</h1>
                </div>
            </div>
        </div>
    </header>

    <main class="container team">
        <div class="row">
            ${generateMembers(templateData)}
        </div>
    </main>
</body>
</html>
    `;
};