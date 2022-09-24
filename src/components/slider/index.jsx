import React, { useState, useRef, useEffect, useCallback } from 'react';
import './style.css';

const onTabSelected = (tab) => {
  console.log(tab);
};

function Slider(props) {
  const tabConfig = [
    'tab1',
    'tab2',
    'tab3',
    'tab4',
    'tab5',
    'tab6',
    'tab7',
    'tab8',
    'tab9',
    'tab10',
    'tab11',
    'tab12',
    'tab13',
    'tab14',
  ];
  const tabButtonsRef = useRef([]);

  const [left, setLeft] = useState(0);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [selectedTab, setSelectedTab] = useState('tab1');

  const tabClickHandler = (item) => {
    setSelectedTab(item);
    onTabSelected(item);
  };

  useEffect(() => {
    const offset = 5;
    const visibleWidth = tabSetRef.current.clientWidth;
    const totalWidth = tabSetRef.current.scrollWidth;

    const difference = totalWidth + currentPosition - visibleWidth;
    if (difference <= offset) {
      setDisableRight(true);
    } else {
      setDisableRight(false);
    }

    if (currentPosition >= -offset) {
      setDisableLeft(true);
    } else {
      setDisableLeft(false);
    }
  }, [currentPosition]);

  const isFirstBtn = useCallback(() => {
    const selectedBtnPos = tabButtonsRef.current[selectedTab].offsetLeft;
    const currentLeftPosition = tabSetRef.current.offsetLeft;
    const tabWidth = tabButtonsRef.current[selectedTab].clientWidth;

    return (
      currentLeftPosition + selectedBtnPos > 0 &&
      currentLeftPosition + selectedBtnPos < tabWidth
    );
  }, [selectedTab]);

  const isLastBtn = useCallback(() => {
    const selectedBtnPos = tabButtonsRef.current[selectedTab].offsetLeft;
    const currentLeftPosition = tabSetRef.current.offsetLeft;
    const tabWidth = tabButtonsRef.current[selectedTab].clientWidth;
    const visibleWidth = tabSetRef.current.clientWidth;
    const offset = 50;
    return (
      currentLeftPosition + selectedBtnPos < visibleWidth &&
      currentLeftPosition + selectedBtnPos + tabWidth + offset > visibleWidth
    );
  }, [selectedTab]);

  const moveRight = useCallback(() => {
    const visibleWidth = tabSetRef.current.clientWidth;
    const totalWidth = tabSetRef.current.scrollWidth;
    const maxMoveWidth = visibleWidth / 2;
    const currentLeftPosition = tabSetRef.current.offsetLeft;
    let newLeft = currentLeftPosition;
    const difference = currentLeftPosition + totalWidth - visibleWidth;
    if (difference > 0) {
      if (difference > maxMoveWidth)
        newLeft = currentLeftPosition - maxMoveWidth;
      else {
        newLeft = currentLeftPosition - difference;
      }
      setLeft(`${newLeft}px`);
    }
    setCurrentPosition(newLeft);
  }, [setCurrentPosition]);

  const moveLeft = useCallback(() => {
    const visibleWidth = tabSetRef.current.clientWidth;
    const maxMoveWidth = visibleWidth / 2;
    const currentLeftPosition = tabSetRef.current.offsetLeft;
    let newLeft = currentLeftPosition;
    if (currentLeftPosition < 0) {
      if (currentLeftPosition < -maxMoveWidth)
        newLeft = currentLeftPosition + maxMoveWidth;
      else {
        newLeft = 0;
      }
      setLeft(`${newLeft}px`);
    }
    setCurrentPosition(newLeft);
  }, [setCurrentPosition]);

  const onPrev = () => {
    moveLeft();
  };
  const onNext = () => {
    moveRight();
  };

  const onClickNextTab = () => {
    const index = tabConfig.findIndex((item) => item === selectedTab);
    if (index < tabConfig.length - 1) {
      setSelectedTab(tabConfig[index + 1]);
    }
  };

  const onClickPrevTab = () => {
    const index = tabConfig.findIndex((item) => item === selectedTab);
    if (index > 0) {
      setSelectedTab(tabConfig[index - 1]);
    }
  };

  useEffect(() => {
    if (isFirstBtn()) {
      moveLeft();
    }

    if (isLastBtn()) {
      moveRight();
    }
  }, [selectedTab, isFirstBtn, isLastBtn, moveLeft, moveRight]);

  const tabSetRef = useRef();
  const visibleArea = useRef();

  return (
    <div className='tabs'>
      <button className='navigation' onClick={onPrev} disabled={disableLeft}>
        Previous
      </button>
      <div ref={visibleArea} className='visibleArea'>
        <div ref={tabSetRef} className='tabSet' style={{ left }} role='tablist'>
          {tabConfig.map((item, index) => {
            return (
              <button
                role='tab'
                tabIndex={item === selectedTab ? 0 : index}
                ref={(el) => (tabButtonsRef.current[item] = el)}
                key={item}
                className='tab'
                onClick={() => tabClickHandler(item)}
                aria-selected={item === selectedTab}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <button className='navigation' onClick={onNext} disabled={disableRight}>
        Next
      </button>

      <div>
        <button
          onClick={onClickNextTab}
          disabled={selectedTab === tabConfig[tabConfig.length - 1]}
        >
          Next Tab
        </button>
      </div>
      <div>
        <button
          onClick={onClickPrevTab}
          disabled={selectedTab === tabConfig[0]}
        >
          Prev Tab
        </button>
      </div>
    </div>
  );
}

export default Slider;
