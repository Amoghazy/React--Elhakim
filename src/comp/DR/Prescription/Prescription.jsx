import { Component } from "react";
import ReactToPrint from "react-to-print";

export default class Prescription extends Component {
  render() {
    return (
      <div>
        <div className="m-5" ref={(el) => (this.componentRef = el)}>
          <div className="p-10">
            <div className="w-auto flex mb-10">
              <img src="../../../../assets/img/logo/logo.png" alt="" />
              <h1 className="ml-5 text-2xl font-bold tracking-wider">
                ElHakim
              </h1>
            </div>
            <h1 className="ml-5 text-xl tracking-wider my-5">
              Prescription Details
            </h1>
            <table className="ml-5 my-5 border-collapse border-2 border-slate-500 w-full mt-10">
              <tbody>
                <tr>
                  <td className="border-2 border-gray-700 p-3 text-extrabold text-xl">
                    Doctor Name
                  </td>
                  <td className="border-2 border-gray-700 p-3">Ammar</td>
                  <td className="border-2 border-gray-700 p-3 text-extrabold text-xl">
                    Patient Name
                  </td>
                  <td className="border-2 border-gray-700 p-3">Ahmed</td>
                </tr>
                <tr>
                  <td className="border-2 border-gray-700 p-3 text-extrabold text-xl">
                    Age
                  </td>
                  <td className="border-2 border-gray-700 p-3">27</td>
                  <td className="border-2 border-gray-700 p-3 text-extrabold text-xl">
                    Email
                  </td>
                  <td className="border-2 border-gray-700 p-3">
                    ahmed@gmail.com
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-gray-700 p-3 text-extrabold text-xl">
                    Doctor Phone
                  </td>
                  <td className="border-2 border-gray-700 p-3">01144031576</td>
                  <td className="border-2 border-gray-700 p-3 text-extrabold text-xl">
                    Patient Phone
                  </td>
                  <td className="border-2 border-gray-700 p-3">01555555555</td>
                </tr>
              </tbody>
            </table>
            <h1 className="ml-5 text-xl tracking-wider my-10">Symptoms</h1>
            <div className="ml-5 my-10 p-5 border-2 border-gray-700">
              At w3schools.com you will learn how to At w3schools.com you will
              learn how toAt w3schools.com you will learn how toAt w3schools.com
              you will learn how toAt w3schools.com you will learn how toAt
              w3schools.com you will learn how tomake a website. They offer free
              tutorials in all web development technologies.
            </div>
            <h1 className="ml-5 text-xl tracking-wider my-5">Medicines</h1>
            <table className="ml-5 my-5 border-collapse border-2 border-slate-500 w-full mt-10">
              <thead>
                <tr>
                  <th className="border-2  border-gray-700 p-3 text-extrabold text-xl text-start">
                    Drug
                  </th>
                  <th className="border-2  border-gray-700 p-3 text-extrabold text-xl text-start">
                    Dosage
                  </th>
                  <th className="border-2  border-gray-700 p-3 text-extrabold text-xl text-start">
                    Instructions
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((item) => {
                  return (
                    <tr key={item}>
                      <td className="border-2 border-gray-700 p-3 text-extrabold text-xl">
                        Asprin
                      </td>
                      <td className="border-2 border-gray-700 p-3">3 times</td>
                      <td className="border-2 border-gray-700 p-3 text-extrabold text-xl">
                        Before meals
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h1 className="ml-5 text-xl tracking-wider my-10">Prescription</h1>
            <div className="ml-5 my-10 p-5 border-2 border-gray-700 w-full">
              At w3schools.com you will learn how to At w3schools.com you will
              learn how toAt w3schools.com you will learn how toAt w3schools.com
              you will learn how toAt w3schools.com you will learn how toAt
              w3schools.com you will learn how tomake a website. They offer free
              tutorials in all web development technologies.
            </div>
          </div>
        </div>

        <ReactToPrint
          trigger={() => {
            return (
              <button className="p-1 ml-20 mb-10 px-5 rounded text-blue-500 bg-blue-100 ">
                Print
              </button>
            );
          }}
          content={() => this.componentRef}
          documentTitle="Prescription"
          pageStyle="print"
        />
      </div>
    );
  }
}
