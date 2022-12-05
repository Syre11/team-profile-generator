const generateTeam = team => {
  const generateManager = manager => {
    return `
          <div class="card employee">
            <div class="card-header bg-primary text-white">
              <h2 class="card-title">${manager.getName()}<h2>
              <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}<h3>
            </div>
            <div class="class-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
              <ul>
            </div>
          </div>
    `
  }
  const generateEngineer = engineer => {
    return `
          <div class="card employee">
            <div class="card-header bg-primary text-white">
              <h2 class="card-title">${engineer.getName()}<h2>
              <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}<h3>
            </div>
            <div class="class-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
              <ul>
            </div>
          </div>
    `
  }
  const generateIntern = intern => {
    return `
          <div class="card employee">
            <div class="card-header bg-primary text-white">
              <h2 class="card-title">${intern.getName()}<h2>
              <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}<h3>
            </div>
            <div class="class-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
              <ul>
            </div>
          </div>
    `
  }

  const employeesHtml = []

  employeesHtml.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
  )
  employeesHtml.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join("")
  )
  employeesHtml.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join("")
  )

  return employeesHtml.join("")
}

module.exports = team => {
  return`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  <body>
    <div class="container-fluid">
      <div class ="row">
        <div class="col-12 jumbotron bg-warning">
          <h1 class="text-center">My Team</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class ="row">
        <div class="row col-12 d-flex justify-content-center">
          ${generateTeam(team)}
        </div>
      </div>
    </div>
  </body>
</html>
  `
}