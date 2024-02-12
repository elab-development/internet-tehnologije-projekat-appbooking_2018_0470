import React from 'react';
import { pdf, Text, View, Document, Page } from '@react-pdf/renderer';

const ExportToPDF = ({ data }) => {
  const exportToPDF = async () => {
    const fileName = 'hotel_document.pdf';

    // Render React component to PDF
    const MyDocument = () => (
      <Document>
        <Page>
          <View>
            <Text>Hotel name: {data.name}</Text>
            <Text>Description: {data.desc}</Text>
            <Text>Address: {data.address}</Text>
            <Text>City: {data.city}</Text>
            {/* Add other relevant data you want to include in the PDF */}
          </View>
        </Page>
      </Document>
    );

    // Create PDF blob
    const blob = await pdf(<MyDocument />).toBlob();

    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <button onClick={exportToPDF}>Export to PDF</button>;
};

export default ExportToPDF;