import React, { CSSProperties } from "react";
import { CSVLink } from "react-csv";

const ExporterCSV = ({ data, nomDuFichier }: { data: {}[], nomDuFichier:string}) => {
	const headers = data.length > 0 ? Object.keys(data[0]).map((key) => ({ label: key.toUpperCase(), key: key })) : [];
    // [
         
	// 	{ label: "ID", key: "id" },
	// 	{ label: "Name", key: "name" },
	// 	{ label: "Price", key: "price" },
	// ];

	const buttonStyle: CSSProperties = {
		display: "inline-block",
		padding: "16px 20px",
		fontSize: "16px",
		color: "#1976d2",
		backgroundColor: "white",
		borderRadius: "4px",
        border: '1px solid #1976d2',
		textDecoration: "none",
		textAlign: "center",
		cursor: "pointer",
	};

	return (
		<div>
			<CSVLink data={data} headers={headers} filename={nomDuFichier} style={buttonStyle}>
				Export to CSV
			</CSVLink>
		</div>
	);
};

export default ExporterCSV;
