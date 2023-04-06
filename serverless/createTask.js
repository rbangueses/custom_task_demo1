exports.handler = async function(context, event, callback) {

    const client = context.getTwilioClient();
  
    const response = new Twilio.Response();
    response.appendHeader("Access-Control-Allow-Origin", "*");
    response.appendHeader("Access-Control-Allow-Methods", "OPTIONS POST GET");
    response.appendHeader("Access-Control-Allow-Headers", "Content-Type");
    
    try {
       const task = await client.taskrouter
        .workspaces("WS45ce05b26c5bdc08e60bb4dbd7c6a46f")
        .tasks.create({
          taskChannel: "custom-obd-dial",
          attributes: JSON.stringify({
            // workerName: "rbangueses", //if we want the task to go to a specific worker that's OK
            numberToCall: "+447397321173",
            parcelId: "PID123312",
            type: "obd-dial",
            name: "Branch ABC"
          }),
          workflowSid: "WWce01a1280f5dfaac7691c3275437541c", //ultimately can define the queue / skill we want to route
        }).then( rsp => {
          response.setStatusCode(200);
          response.appendHeader("Content-Type", "application/json");
          response.setBody("created new task");
          callback(null, response);
          }
        );
    }
    catch(err) {
      response.appendHeader("Content-Type", "plain/text");
      response.setBody(err.message);
      response.setStatusCode(500);
      // If there's an error, send an error response
      // Keep using the response object for CORS purposes
      console.error(err);
      callback(null, response);
    }
  }