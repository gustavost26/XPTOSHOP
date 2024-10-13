import React from 'react';

export default function Footer() {
	const contractAddress = "0xe519e0692ffA19ca2430A427CFcceC0b6AF5C201";
	const polygonScanContractAddress = `https://amoy.polygonscan.com/address/${contractAddress}`;

	return (
		<footer className="mt-10 mb-10">
			<div className="container text-center">
				<p className="text-muted my-3">
					Endereço do Smart Contract: <strong>{contractAddress}</strong>
				</p>
				<p className="text-muted mb-5">
					<a
						href={polygonScanContractAddress}
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-outline-dark"
						style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
					>
						<img
							src="https://amoy.polygonscan.com/assets/generic/html/favicon-light.ico"
							alt="PolygonScan"
							width="20"
							className="me-2"
						/>
						Ver no PolygonScan
					</a>
				</p>
				<p className="mb-1">&copy; 2024 XPTOSHOP, Inc. Todos os direitos reservados.</p>
			</div>
		</footer>
	);
}
