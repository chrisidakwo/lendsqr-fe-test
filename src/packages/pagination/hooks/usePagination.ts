import {useLocation} from "react-router-dom";
import {useState} from "react";

export const usePagination = (dataLength: number, perPage: number) => {
    const { search }  = useLocation();
    const params = new URLSearchParams(search);

    const [page, setPage] = useState(params.get('page') ?? '1');
    const [pageLength, setPageLength] = useState(perPage);

    return { page, setPage, pageLength, setPageLength, pagesCount: dataLength / pageLength };
}
