const engineerSection = data => {
  if (!data.githubURL || !data.githubUserName || data.role!="Engineer") {
      return '';
  }

  return `
      <section class="my-3" id="about">
          <p>Github: <a href="${data.githubURL}"  target="_blank">${data.githubUserName}</p>
      </section>
  `;
};

// function to generate markup for HTML
function generateMarkup(pTitle,data) {
  console.log(data);
  
    // this will create three variables based on data in templateData
    //const { licenses, ...myData } = data;


  return `<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${pTitle} </title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
  <header>
    <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${pTitle}</h1>
    </div>
  </header>
  <main class="container my-5">
  <h1> ${data.name} <h1>
  email: <a href="mailto:${data.email}">${data.email}</a><br>
  ${engineerSection(data)}

  
  </main>
  </body>
</html>


`;
}

module.exports = generateMarkup;