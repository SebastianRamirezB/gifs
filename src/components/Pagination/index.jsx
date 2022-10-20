import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { ButtonNext, ButtonPrevious, Buttons } from './styles';

export const Pagination = ({ onNextPage, onPreviousPage, dataSearch }) => {
    return (
        <Buttons>
            {
                dataSearch.offset !== 0 && (<ButtonPrevious onClick={onPreviousPage}>
                    <GoArrowLeft />
                Previous
                </ButtonPrevious>)

            }
            {
                dataSearch.offset !== 4200 && (<ButtonNext onClick={onNextPage} >
                Next
                    <GoArrowRight/>
                </ButtonNext>)

            }

        </Buttons>
    );
};
