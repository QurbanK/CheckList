//student of nios
// phone number of vijay chahal 9215000546
Faisal
Arish
Naina
Sonakshi 
Janvi
Shadma 
Naziya 
Kakul
Tohib
Ayan up
Natasha
Gungun
Jay Kumar 
Vivan
Farhan
Faizan
Tamjeed
Shabiba
Shaheen
Nusrat 
Meraj
Saif
Nitesh
Nidan
Ayan2
Parvez
Isha
Gazala





const handleCheckboxClick = (e, data) => {
    const checked = e.target?.checked;
    let checked_list = [...selectedCheckList];
    if (checked) {
      checked_list.push(data?.payment_mapping_reference_number);
    } else {
      checked_list = checked_list.filter(
        (item) => item !== data?.payment_mapping_reference_number
      );
    }
    setSelectedCheckList(checked_list);
    console.log({ checked_list });
  };
  
  //Then send the data payload//
  
    const submitDuesHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      payment_mapping_reference_number: selectedCheckList,
    };
    duesReverse(payload)
      .then(
        (res) => {
          if (res && res.success) {
            setLoading(false);

            setSelectedCheckList([]);
            toastSuccess(res.message);
          }
        },
        (err) => {
          setLoading(false);
        }
      )
      .catch((err) => {
        setLoading(false);
        toastError(err.message);
      });
  };
