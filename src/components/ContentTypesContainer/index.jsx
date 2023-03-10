import React from 'react';
import './style.css';
import magIcon from '../../assets/icon-search-dark_2023-03-09/icon-search-dark.png';
import pencilIcon from '../../assets/user-pencil-write-ui-education_2023-03-09/user-pencil-write-ui-education.png';
import NewTypeChip from '../NewTypeChip';
import NewFieldChip from '../NewFieldChip';
import Modal from '../Modal';
import { useState, useEffect } from 'react';
import { makeRequest } from '../../utils/makeRequest';
import { GET_COLLECTION_DETAILS, CREATE_CONTENT_TYPE_URL, DELETE_FIELD_CONTENT_URL, GET_RECORDS_BY_ID } from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';
const ContentTypesContainer = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState({});
  const [columns, setColumns] = useState([]);


  const showAddNewContentModal = () => {
    modalOptions.heading = 'Add New Content Type';
    modalOptions.inputHeading = 'Name of the content type';
    setModalOptions(modalOptions);
    setIsOpen(true);
  };

  const showAddNewFieldModal = () => {
    modalOptions.heading = 'Add New Field';
    modalOptions.inputHeading = 'Name of the field';
    modalOptions.typeHeading = 'Type of the field';
    setModalOptions(modalOptions);
    setIsOpen(true);
  };

  const [collections, setCollections] = useState([]);
  const [currentTypeChip, setCurrentTypeChip] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(GET_COLLECTION_DETAILS, navigate).then((response) => {
      setCollections(response.data);
      makeRequest(GET_RECORDS_BY_ID, navigate, {
        data: { id: 1 },
      }).then((response) => {
        setCurrentTypeChip(response?.data);
        setColumns(Object.keys(response?.data?.fields));
      });
    });
  }, []);

  const addRecordTypeHandler = async (inputHeading) => {
    makeRequest(CREATE_CONTENT_TYPE_URL, navigate, {
      data: { name: inputHeading },
    }).then((response) => {
      setCollections([...collections, response.data]);
    });
  };

  const deleteFieldHandler = async (name, id) => {
    await makeRequest(DELETE_FIELD_CONTENT_URL, navigate, {
      data: {
        id: id,
        field_name: name
      },
    });
    const newColumns = columns.filter((col) => col.name !== name);
    setColumns([...newColumns]);
  };

  const selectTypeChip = (id) => {
    makeRequest(GET_RECORDS_BY_ID, navigate, {
      data: { id: id },
    }).then((response) => {
      setCurrentTypeChip(response?.data);
      setColumns(Object.keys(response?.data?.fields));
    });
  };

  return (
    <div className="content-types-container">
      <div className='new-types-column'>
        <div className='new-types-header'>
          <p>{collections.length} Types</p>
          <img src={magIcon} />
        </div>

        <button className='new-type-button' onClick={showAddNewContentModal}>+ New Type</button>
        <div className='new-type-list'>
          {collections.length !== 0 ? collections?.map((collection) => (
            <NewTypeChip key={collection?.id} data={collection?.name} clickHandler={selectTypeChip} id={collection?.id} isActive={currentTypeChip?.id === collection?.id} />
          )) : <div>Loading</div>}
        </div>
      </div>

      <div className='new-fields-column'>
        <div className='new-fields-heading'>
          <p>{currentTypeChip.name}</p>
          <img src={pencilIcon} />
        </div>
        <p className='fields-text'>{columns.length} fields</p>
        <button className='field-button' onClick={showAddNewFieldModal}>Add another field</button>
        <div className='fileds-list'>
          {columns?.map((col, index) => (
            <NewFieldChip key={index} col={col} deleteFieldHandler={deleteFieldHandler} />
          ))}
        </div>
      </div>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          modalOptions={modalOptions}
          setModalOptions={setModalOptions}
          addRecordTypeHandler={addRecordTypeHandler}
        />
      )}
    </div>
  );
};

export default ContentTypesContainer;