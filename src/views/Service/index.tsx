import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { ButtonAdd, DateButton, Dropdown, Pagination, SearchText } from '../../components'
import styles from './service.module.css';
// import { addDatas } from '../../config/firebase/firestore';
// import { service } from '../../types';
import { getAllServices } from '../../store/reducers/serviceSlice';
import { checkTableHeader } from '../../utils';
import { addValue } from '../../store/reducers/breadcrumbSlice';


const tableHeader = ["Mã dịch vụ", "Tên dịch vụ", "Mô tả", "Trạng thái hoạt động", "nút 1", "nút 2"]

export const Service = () => {

  const breadScrumbState = useSelector((state: RootState) => state.breadcrumb.value);
  const servicesState = useSelector((state: RootState) => state.service.services);
  const [displayPage, setDisplayPage] = useState<string>("");
  const dispatch = useDispatch<any>();

  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 8;
  const offset = currentPage * PER_PAGE;
  const pageCount = () => {
    // if (dataFilter.length === 0) 
    return Math.ceil(servicesState.length / PER_PAGE);
    // return Math.ceil(dataFilter.length / PER_PAGE);
  }

  useEffect(() => {
    dispatch(getAllServices())
    const getLocation = breadScrumbState[breadScrumbState.length - 1] as { title: string, path: string };
    if (getLocation !== undefined) return setDisplayPage(getLocation.title);
  }, [breadScrumbState, dispatch])



  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected);
  };

  const checkStatus = (text: string) => {
    if (text === "Hoạt động" || text === "Kết nối") return `${styles.green}`;
    return `${styles.red}`
  }

  const handleClick = (type: string) => {
    let item = { title: '', path: '' } as {title: string, path: string};
    if(type.includes("Chi tiết")){
      item.title = "Chi tiết"
    }
    if(type.includes("Cập nhật")){
      item.title = "Cập nhật"
    }
    dispatch(addValue(item))
  }

  const handleAdd = () => {
    dispatch(addValue({ title: "Thêm dịch vụ", path: '' }))
  }
  return (
    <div>
      <h2>Quản lý dịch vụ</h2>
      {displayPage === "Danh sách dịch vụ" &&
        <React.Fragment>
          <div>

            <div className={styles.filterbtn} >
              <div>
                <div>
                  <p>Trạng thái hoạt động</p>
                  <Dropdown
                    data={["Tất cả", "Hoạt động", "Ngưng hoạt động"]}
                    value=''
                    setWidth='200'
                    onClick={(value) => console.log(value)}
                  />
                </div>

                <div>
                  <p>Chọn thời gian</p>
                  <DateButton />
                </div>

              </div>

              <div>
                <p>Từ khóa</p>
                <SearchText
                  onFind={(text) => console.log(text)}
                />
              </div>
            </div>

            <div className={styles.body} >
              <div>
                <table>
                  <thead>
                    <tr>
                      {tableHeader.map((item) => (
                        <th key={item} >{checkTableHeader(item) ? item : ''}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {servicesState.slice(offset, offset + PER_PAGE).map((item) => (
                      <tr key={item.id}>
                        <td>{item.serviceCode}</td>
                        <td>{item.serviceName}</td>
                        <td>{item.description}</td>
                        <td className={styles.status} >
                          <div>
                            <div className={checkStatus(item.activeStatus)} />
                            <p>{item.activeStatus}</p>
                          </div>
                        </td>
                        <td 
                          className={styles.btn}
                          onClick={() => handleClick("Chi tiết")}
                        >Chi tiết</td>
                        <td 
                          className={styles.btn}
                          onClick={() => handleClick("Cập nhật")}
                        >Cập nhật</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div>
                  <Pagination
                    pageCount={pageCount()}
                    handlePageClick={handlePageClick}
                  />
                </div>
              </div>

              <ButtonAdd text="Thêm dịch vụ" onClick={() => handleAdd()} />
            </div>
          </div>
        </React.Fragment>
      }

      {displayPage === "Thêm dịch vụ" &&
        <React.Fragment>
          <div>
            <div className="container">
            <h3>Thông tin dịch vụ</h3>
            </div>
          </div>
        </React.Fragment>
          
      }
    </div>
  )
}
