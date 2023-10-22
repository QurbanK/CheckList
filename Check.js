//student of nios
1.ronak
2.govinda
3.gaytri
4.zaid
5.aasif
6.aman kumar
7.ahasan
8.amara
9.najrana
10.arbaaz
11.heena
12.shahrukh khan
13.dev
14.javed
15.aadi
16.rihan
17.anas
18.muskan
19.sofiya
20.aditya
21.noni
22.noor





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
