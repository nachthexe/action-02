import {Octokit} from "https://cdn.skypack.dev/@octokit/rest";

const octokit = new Octokit({
    auth: "d3e05ebbc4347b9252c091c308e43bc87a3c428c",
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
