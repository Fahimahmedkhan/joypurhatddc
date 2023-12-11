import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import { Worker } from '@react-pdf-viewer/core';

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"><RouterProvider router={router}></RouterProvider></Worker>
    </div>
  );
}

export default App;
