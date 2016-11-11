
    function searchAllMember() {

        $.ajax({

            url:"http://localhost:7070/bank/selectAllMember",
            type:"GET",
            dataType:"jsonp",
            jsonp:"callback",
            timeout: 3000,
            success:function (result) {

                for(var i=0; i<result.length; i++){


                var tr = $("<tr></tr>");
                    var memberid = $("<td></td>").text(result[i].memberId);
                    var memberName = $("<td></td>").text(result[i].memberName);
                    var memberAccount = $("<td></td>").text(result[i].memberAccount);
                    var memberBalance = $("<td></td>").text(result[i].memberBalance);

                    tr.append(memberid);
                    tr.append(memberName);
                    tr.append(memberAccount);
                    tr.append(memberBalance);

                    $("#memberAll").append(tr);

                }
            },
            error:function () {
                alert("fail");
            }
        });


    }

    function searchMember() {

        var id = $("#memberId").val()

        if(event.keyCode ==13){

        $.ajax({

            url:"http://localhost:7070/bank/selectOne",
            type:"GET",
            dataType:"jsonp",
            jsonp:"callback",
            data:{
                memberId:id
            },
            success:function (result) {

              $("#memberDetail").empty();

                for(var i=0; i<result.length; i++){


                    var tr = $("<tr></tr>");
                    var memberid = $("<td></td>").text(result[i].memberId);
                    var memberName = $("<td></td>").text(result[i].memberName);
                    var memberAccount = $("<td></td>").text(result[i].memberAccount);
                    var memberBalance = $("<td></td>").text(result[i].memberBalance);

                    tr.append(memberid);
                    tr.append(memberName);
                    tr.append(memberAccount);
                    tr.append(memberBalance);

                    $("#memberDetail").append(tr);

                }
            },
            error:function () {
                alert("fail");
            }
        });

        }
    }

    function inputBalance() {

        var id = $("#depositMemberId").val()
        var money = $("#depositMemberBalance").val();

        $.ajax({

            url:"http://localhost:7070/bank/deposit",
            type:"GET",
            dataType:"jsonp",
            jsonp:"callback",
            data:{
                memberId:id,
                memberBalance:money

            },
            success:function (result) {

                alert("입금성공");


            },
            error:function () {
                alert("입금실패");
            }



        });


    }

    function withrawBalance() {

        var id = $("#withdrawMemberId").val()
        var money = $("#withdrawMemberBalance").val();

        $.ajax({

            url:"http://localhost:7070/bank/withdraw",
            type:"GET",
            dataType:"jsonp",
            jsonp:"callback",
            data:{
                memberId:id,
                memberBalance:money

            },
            success:function (result) {

                alert("출금성공");


            },
            error:function () {
                alert("출금실패");
            }



        });
    }

    function transferBalance() {

        var sid = $("#sendMemberId").val();
        var rid = $("#receiveMemberBalance").val();
        var money = $("#transferBalance").val();

        $.ajax({

            url:"http://localhost:7070/bank/transfer",
            type:"GET",
            dataType:"jsonp",
            jsonp:"callback",
            data:{
                sendId:sid,
                receiveId:rid,
                transferBalance:money

            },
            success:function (result) {

                alert("성공");


            },
            error:function () {
                alert("실패");
            }




        })

    }

    function checkMember() {

        var id = $("#checkMemberId").val();

        $.ajax({

            url:"http://localhost:7070/bank/viewInfo",
            type:"GET",
            dataType:"jsonp",
            jsonp:"callback",
            data:{
                memberId:id,


            },
            success:function (result) {


                $("#checkId").empty();

                for(var i=0; i<result.length; i++){


                    var tr = $("<tr></tr>");
                    var memberid = $("<td></td>").text(result[i].memberId);
                    var memberName = $("<td></td>").text(result[i].memberName);
                    var memberAccount = $("<td></td>").text(result[i].memberAccount);
                    var memberBalance = $("<td></td>").text(result[i].memberBalance);

                    tr.append(memberid);
                    tr.append(memberName);
                    tr.append(memberAccount);
                    tr.append(memberBalance);

                    $("#checkId").append(tr);

                }


            },
            error:function () {
                alert("실패");
            }




        })

    }