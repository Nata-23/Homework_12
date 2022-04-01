"use strict";
//1
const getGitHubUser = async (companyName) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw response;
    }
    const data = await response.json();
    console.log("data", data);
    console.log(data.find((el) => el.company.name === companyName));
  } catch (responseError) {
    if (responseError.status === 404) {
      console.log("User is not found");
    } else {
      console.error(error);
    }
  }
};

getGitHubUser("Johns Group");
