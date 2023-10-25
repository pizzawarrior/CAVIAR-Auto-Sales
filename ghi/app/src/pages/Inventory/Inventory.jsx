import React from 'react';
import { Wrapper, InventoryContainer } from './style';
import Button from '../../components/Button/Button';

const Inventory = () => {
    const handleClick = () => console.log('click');
    return (
        <Wrapper>
            <InventoryContainer>
                <div id='one'>
                    <Button
                        text='Test Text'
                        handleClick={handleClick}
                    />
                </div>
                <div id='two'></div>
                <div id='three'></div>
            </InventoryContainer>
        </Wrapper>
    );
};

export default Inventory;
