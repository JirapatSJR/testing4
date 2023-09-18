"use client";
import React from "react";
const RawMaterialRows = ({ rawMaterials, thCertificate, currentURL }) => {
  rawMaterials.sort((a, b) => {
    if (a.attributes.name < b.attributes.name) {
      return -1;
  }
  if (a.attributes.name > b.attributes.name) {
      return 1;
  }
    return 0
});
  return (
    <tbody className=" text-white">
      {rawMaterials?.map((rawMaterial) => {
        return (
          <tr
            key={rawMaterial.attributes.slug}
            className="hover:cursor-pointer hover:bg-green4wd hover:bg-opacity-20"
            onClick={() =>
              (window.location = currentURL + "/" + rawMaterial.attributes.slug)
            }
          >

            <td>{rawMaterial.attributes.name}</td>
            <td>{rawMaterial.attributes.productCode}</td>
            <td>{rawMaterial.attributes.INCI}</td>
            <td>{rawMaterial.attributes.CASNumber}</td>
            {
              thCertificate.map((certificate,i) => {
                return (
                  <td key={rawMaterial.attributes.slug + "+" + i}>
                    {rawMaterial.attributes.certificates.data.some(function (
                      rmCertificate
                    ) {
                      return rmCertificate.id === certificate.id;
                    }) && "✔"}
                  </td>
                );
              })
            }
            <td>
              {rawMaterial.attributes.applications.map((application) => {
                return application.text;
              })}
            </td>
          </tr>
        );
      })}
    </tbody>
  )
}

export default RawMaterialRows;
