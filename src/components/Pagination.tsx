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
					variant="primary"
					disabled={!hasPreviousPage}
					onClick={onPreviousPage}
				>
					Previous Page
				</Button>
				<div className="p-5 pt-3 pb-3">
					{pageNumb}/{totalPages}
				</div>
				<Button
					variant="primary"
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
