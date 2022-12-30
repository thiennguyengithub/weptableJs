let listHocsinh=[

]
const inputMsv=document.getElementById('msv');
const inputHvt=document.getElementById('hvt');
const inputNs=document.getElementById('ns');
const inputQq=document.getElementById('qq');
const inputDt=document.getElementById('dt');
const inputDl=document.getElementById('dl');
const inputDh=document.getElementById('dh');

const display=(arr, index)=>{
    let table=arr.map(item=>
        
        `
        <tr key=${index}>
            <td>${item.msv} </td>
            <td>${item.hvt} </td>
            <td>${item.ns} </td>
            <td>${item.qq} </td>
            <td>${item.dt} </td>
            <td>${item.dl} </td>
            <td>${item.dh} </td>
            <td>${Math.round((item.dt +item.dl+item.dh)/3)}  </td>
            <td>${(item.dt +item.dl+item.dh)/3>=5?"lên lớp ":"ở lại lớp"}</td>
            <td>
            <button  onclick="deleteItem(${item.msv})">delete</button>
            
            </td>
        </tr>
        `
    )
    document.getElementById('tbody').innerHTML=table;
    if(arr.length===0){
        document.getElementById('no-Data').innerText='Không có dữ liệu'
    }
    else{
        document.getElementById('no-Data').innerText=''

    }
}
display(listHocsinh)

const update=()=>{
    console.log(mess());
    const hvtVl=inputHvt.value;
    const nsVl=inputNs.value;
    const qqVl=inputQq.value;
    const dtVl=inputDt.value;
    const dlVl=inputDl.value;
    const dhVl=inputDh.value;
    const newHs={
        msv:Date.now(),
        hvt:hvtVl,
        ns:nsVl,
        qq:qqVl,
        dt:+dtVl,
        dl:+dlVl,
        dh:+dhVl,
    }
    listHocsinh=[...listHocsinh,newHs]
    display(listHocsinh)
}
const reset= ()=>{

    inputHvt.value="Nguyễn Quang Thiện"
    inputNs.value="1997-10-02"
    inputQq.value="Hà Nam"
    inputDt.value=8
    inputDl.value=7
    inputDh.value=4

}

const deleteItem=(id)=>{
    // console.log(id);
    // const fillterHs=listHocsinh.filter(item=>item.msv!==id)
    // listHocsinh=[...fillterHs]
    // display(listHocsinh)



    Swal.fire({
        title: 'Bạn có muốn xóa không?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            const fillterHs=listHocsinh.filter(item=>item.msv!==id)
    listHocsinh=[...fillterHs]
    display(listHocsinh)
            Swal.fire(
                'Deleted!',
                'success'
            )
        }
    })

}

const mess= ()=>{
    let isCheck=true;
    if(inputHvt.value===""){
        document.getElementById('mes').innerText='Không được bỏ trống!!!'
       isCheck= false;
    }
    else{
         document.getElementById('mes').innerText=''
       isCheck=true;
    }
    return isCheck;
}

