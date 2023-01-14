import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Progress } from "reactstrap";

export default function App() {
  return (
    <div className="text-center">
      <Progress multi>
        <Progress bar value="15">
          foo
        </Progress>
        <Progress bar color="success" value="30">
          bar
        </Progress>
        <Progress bar color="info" value="25">
          baz
        </Progress>
        <Progress bar color="warning" value="20">
          qux
        </Progress>
        <Progress bar color="danger" value="5">
          !!
        </Progress>
      </Progress>
    </div>
  );
}
// App.js
