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
					className="button h3"
					disabled={!hasPreviousPage}
					onClick={onPreviousPage}
				>
					Previous Page
				</Button>
				<div className="h3 p-5 pt-3 pb-3">
					{pageNumb}/{totalPages}
				</div>
				<Button
					className="button h3"
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
