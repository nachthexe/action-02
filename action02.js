import {Octokit} from "https://cdn.skypack.dev/@octokit/rest";

const octokit = new Octokit({
    auth: ,
    userAgent: 'myApp v0.0.1',
    baseUrl: 'https://api.github.com'
    });



await octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/labels', {
    owner: 'company1111',
    repo: 'action-02',
    issue_number: 42,
    labels: [
      'bug'
    ]
  });
