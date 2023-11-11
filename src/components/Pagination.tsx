import React from "react";
import Button from "react-bootstrap/Button";

interface IProps {
	pageNumb: number;
	totalPages: number;
	hasPreviousPage: boolean;
	hasNextPage: boolean;
	onPreviousPage: () => void;
	onNextPage: () => void;
}

const Pagination: React.FC<IProps> = ({
	pageNumb,
	totalPages,
	hasPreviousPage,
	hasNextPage,
	onPreviousPage,
	onNextPage,
}) => {
	return (
		<div className="page">
			<div className="d-flex flex-row">
				<Button
					variant="outline-light"
					disabled={!hasPreviousPage}
					onClick={onPreviousPage}
				>
					Previous Page
				</Button>
				<div style={{ color: "white" }} className="p-5 pt-3 pb-3">
					{pageNumb}/{totalPages}
				</div>
				<Button
					variant="outline-light"
					disabled={!hasNextPage}
					onClick={onNextPage}
				>
					Next Page
				</Button>
			</div>
		</div>
	);
};

export default Pagination;
