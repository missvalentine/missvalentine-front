import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
const FadeTransition = dynamic(
  () => import('../../components/FadeTransition'),
  {
    ssr: false,
  }
);
import classNames from 'classnames';
const LearnCollapsePlus = dynamic(
  () => import('../../components/learn/LearnCollapsePlus'),
  {
    ssr: false,
  }
);
const LearnCollapse = dynamic(
  () => import('../../components/learn/LearnCollapse'),
  {
    ssr: false,
  }
);
const Layout = dynamic(() => import('../../components/Layouts/Layout'), {
  ssr: false,
});
import '../../components/styles/app.scss';
import parse from 'react-html-parser';
import axios from 'axios';
import apliList from '../../services/apis/apiList';

class Learn extends React.Component {
  constructor() {
    super();
    this.state = {
      openedCollapse: '0',
      isVisible: true,
      contentId: '0_0',
      innerCollapse: '-1',
      faqData: [],
    };
  }
  componentDidMount() {
    axios
      .get(apliList.getLearn)
      .then((result) => this.setState({ faqData: result.data.data }));
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.prevScroll = window.scrollY;
    const url_string = window.location.href;
    const url = new URL(url_string);
    const id = url.searchParams.get('id');
    const col = url.searchParams.get('col') || '1';
    const { openedCollapse } = this.state;
    if (id && id !== '' && openedCollapse !== id) {
      this.setState({
        openedCollapse: id,
        contentId: `${id}_${col}`,
        innerCollapse: col,
      });
    }
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    const scrollUp = this.prevScroll > window.scrollY;
    const { wrapper, leftScrolls, rightScrolls } = this.refs;

    const windowScrollTop = window.scrollY;
    const wrapperHeight = wrapper.clientHeight;
    const wrapperOffsetTop = wrapper.offsetTop;

    const leftScrollsHeight = leftScrolls.clientHeight;
    const leftScrollsWidth = leftScrolls.clientWidth;
    const leftScrollsOffsetTop = leftScrolls.offsetTop;

    const rightScrollsHeight = rightScrolls.clientHeight;
    const rightScrollsOffsetTop = rightScrolls.offsetTop;

    const headerHeight = 120;
    const windowWidth = window.innerWidth;
    // console.log({
    //   windowScrollTop,
    //   wrapperHeight,
    //   wrapperOffsetTop,
    //   leftScrollsHeight,
    //   leftScrollsOffsetTop,
    //   rightScrollsHeight,
    //   rightScrollsOffsetTop,
    //   leftScrolls
    // });
    const rH = wrapperHeight + wrapperOffsetTop - leftScrollsHeight;
    // console.log({
    //   rH,
    //   wS: windowScrollTop
    // });
    if (scrollUp || true) {
      if (rightScrollsHeight > leftScrollsHeight) {
        if (
          windowScrollTop + headerHeight >= leftScrollsOffsetTop &&
          windowWidth > 991
        ) {
          if (
            windowScrollTop + headerHeight >=
            rightScrollsOffsetTop + rightScrollsHeight
          ) {
            const diffTop =
              windowScrollTop - leftScrollsOffsetTop + headerHeight;
            leftScrolls.style.position = 'absolute';
            leftScrolls.style.top = `${diffTop}px`;
            rightScrolls.style.marginLeft = `${leftScrollsWidth}px`;
          } else {
            const diffTop = rH - headerHeight;
            if (rH < windowScrollTop + (headerHeight - 5)) {
              leftScrolls.style.top = `${diffTop + headerHeight}px`;
              leftScrolls.style.position = 'absolute';
            } else {
              leftScrolls.style.top = `${headerHeight}px`;
              leftScrolls.style.position = 'fixed';
            }
            rightScrolls.style.marginLeft = `${leftScrollsWidth}px`;
            leftScrolls.style.width = `${leftScrollsWidth}px`;
          }
        } else {
          console.log('else+');
          leftScrolls.style.position = '';
          leftScrolls.style.top = '';
          rightScrolls.style.marginLeft = '';
          leftScrolls.style.width = '';
        }
      } else {
        leftScrolls.style.width = '';
        leftScrolls.style.position = '';
        leftScrolls.style.top = '';
        rightScrolls.style.marginLeft = '';
      }
    } else {
      // const headerHeight = 10
      if (rightScrollsHeight > leftScrollsHeight) {
        if (windowScrollTop + (headerHeight - 1) >= leftScrollsOffsetTop) {
          if (
            windowScrollTop + headerHeight >=
            rightScrollsOffsetTop + rightScrollsHeight
          ) {
            const diffTop =
              windowScrollTop - leftScrollsOffsetTop + headerHeight;
            leftScrolls.style.position = 'absolute';
            leftScrolls.style.top = `${diffTop}px`;
            rightScrolls.style.marginLeft = `${leftScrollsWidth}px`;
          } else {
            leftScrolls.style.position = 'fixed';
            leftScrolls.style.top = `${headerHeight}px`;
            rightScrolls.style.marginLeft = `${leftScrollsWidth}px`;
            leftScrolls.style.width = `${leftScrollsWidth}px`;
          }
        } else {
          console.log('else+');
          leftScrolls.style.position = '';
          leftScrolls.style.top = '';
          rightScrolls.style.marginLeft = '';
        }
      }
    }

    this.prevScroll = window.scrollY;
  };
  changeCollapse = (id) => {
    console.log(id);
    this.setState((prevState) => ({
      openedCollapse: id === prevState.openedCollapse ? null : id,
      contentId: `${id}_0`,
    }));
  };
  changeContent = (contentId) => {
    console.log(contentId);
    if (this.timeOut1) {
      clearTimeout(this.timeOut1);
    }
    if (this.timeOut2) {
      clearTimeout(this.timeOut2);
    }
    this.setState(
      {
        isVisible: false,
      },
      () => {
        this.timeOut1 = setTimeout(() => {
          this.setState(
            {
              contentId,
            },
            () => {
              setTimeout(() => {
                this.timeOut2 = this.setState({
                  isVisible: true,
                });
              }, 300);
            }
          );
        }, 400);
      }
    );
  };
  changeInnerCollapse = (id) => {
    this.setState((prevState) => ({
      innerCollapse: id === prevState.innerCollapse ? null : id,
    }));
  };
  getHeading = (contentId, data) => {
    // console.log(contentId);
    if (contentId) {
      const ids = contentId.split('_');
      //   console.log(ids);
      const perticularEl = data[ids[0]];
      //   console.log(perticularEl);
      if (perticularEl && perticularEl.sublearn) {
        const heading = perticularEl.sublearn[ids[1]];
        // console.log(heading);
        if (heading && heading.subTitle) {
          return heading;
        }
      }
    }
    return null;
  };
  render() {
    console.log(this.state.faqData);
    const { className } = this.props;
    const { openedCollapse, isVisible, innerCollapse, contentId } = this.state;
    console.log(openedCollapse);
    return (
      <Layout headerTheme="dark" fixed={true}>
        <div
          className={classNames('c-learn-page', {
            [className]: className,
          })}
        >
          <div
            style={
              {
                // paddingTop: "100px"
              }
            }
            className="w-100"
          />
          <h1
            className="text-uppercase text-center"
            style={{
              letterSpacing: '2px',
              fontWeight: '700',
              marginBottom: '32px',
            }}
          >
            Frequently asked questions
          </h1>
          <div className="w-100">
            <div ref="wrapper" className="row align-items-start">
              <div ref="leftScrolls" className="pb-5 col-lg-3 ">
                <div className="pr-3 border-right-gold">
                  {this.state.faqData.map((el, key) => {
                    return (
                      <LearnCollapse
                        isOpen={key == openedCollapse}
                        title={el.title}
                        onClick={() => {
                          this.changeCollapse(key);
                        }}
                        active={openedCollapse == key}
                        key={key}
                      >
                        {el.sublearn &&
                          el.sublearn.map((elx, key1) => {
                            return (
                              <LearnMenuHeading
                                key={key1}
                                onClick={() => {
                                  this.changeContent(`${key}_${key1}`);
                                }}
                                active={`${key}_${key1}` === contentId}
                                title={elx.subTitle}
                              />
                            );
                          })}
                      </LearnCollapse>
                    );
                  })}
                </div>
              </div>
              {this.state.faqData.length > 0 && (
                <div ref="rightScrolls" className="col-lg-9">
                  <FadeTransition in={isVisible}>
                    <div className="pl-lg-5 pt-2 learn-view">
                      <div className="pb-3 learn-view-inner">
                        <h4>
                          {
                            this.getHeading(contentId, this.state.faqData)
                              .subTitle
                          }
                        </h4>
                      </div>
                      <div className="main-content">
                        {parse(
                          this.getHeading(contentId, this.state.faqData).content
                        )}
                      </div>

                      {this.getHeading(
                        contentId,
                        this.state.faqData
                      ).questionnaire.map((elem, key) => {
                        return (
                          <div>
                            <LearnCollapsePlus
                              title={parse(elem.question)}
                              onClick={() => {
                                this.changeInnerCollapse(`${contentId}_${key}`);
                              }}
                              isOpen={innerCollapse === `${contentId}_${key}`}
                            >
                              {parse(elem.answer)}
                            </LearnCollapsePlus>
                          </div>
                        );
                      })}
                    </div>
                  </FadeTransition>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  countryCode: state.location.countryCode,
});
export default connect(mapStateToProps)(Learn);

const LearnMenuHeading = (props) => {
  const { title, active, onClick } = props;
  let classNameActive = '';
  if (active) {
    classNameActive = 'cursor-pointer mb-1 p-2 pb-1 learn__collapse active';
  } else {
    classNameActive = 'cursor-pointer mb-1 p-2 pb-1 learn__collapse';
  }
  return (
    <p
      onClick={onClick}
      style={{
        fontWeight: active ? 500 : 400,
      }}
      className={classNameActive}
    >
      {title}
    </p>
  );
};
