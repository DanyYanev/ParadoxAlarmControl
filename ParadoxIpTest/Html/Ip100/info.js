var cpt_inf;function infoaff(tbl){var sre;top.document.title=tbl[0];cpt_inf=0;sre="";sre+=cmtop("gray",mainframe.ln_inf[cpt_inf++],"#000000","250px");sre+=infhea();sre+="<td align='center'><div style='overflow:hidden;white-space:nowrap;width:220px;'>"+tbl[0]+"</div>";sre+=inffot();sre+=cmbot("250px");sre+=cmtop("gray",mainframe.ln_inf[cpt_inf++],"#000000","250px");sre+=infc(tbl);sre+=cmbot("250px");return sre;}function infc(tbl){var sre,i,opt,prpt,cpt_prpt=6;sre=infhea();sre+="<td colspan=2>"+mainframe.ln_inf[cpt_inf++]+"</td></tr>";for(i=1;i<tbl.length;i++){opt="";switch(i){case 1:opt=infopt();break;case 2:opt=infopt();break;case 7:opt=infopt();break;default:break;}if(i>2){prpt="<td width='100px'>"+top.mainframe.ln_inf[cpt_prpt++]+" :</td><td><div style='overflow:hidden;white-space:nowrap;width:130px;'>";}else{prpt="<td colspan=2><div>";}sre+="<tr class='f8 far'><td></td>"+prpt+tbl[i]+"</div></td></tr>"+opt;}sre+="<tr class='he4'><td>";sre+=inffot();return sre;}function infoinit(){if(top.tmp_alarme&&top.tmp_alarme!=""&&top.tmp_alarme!="-1"){mainframe.infoframe.document.getElementById('INALARM').innerHTML=top.st_affdata_al(top.tmp_alarme);mainframe.infoframe.document.getElementById('INALARM').style.display="block";}else{mainframe.infoframe.document.getElementById('INALARM').style.display="none";}}function infhea(){return"<table border='0' cellpadding='0' cellspacing='0' width='250px'><tr><TD width='1' bgcolor='#C8CFD2'></TD><td><table border='0' cellpadding='0' cellspacing='0' width='100%'><tr class='he4'><td></td></tr><tr class='b i f8 far'><td width='10px'></td>";}function inffot(){return"</td></tr></table></TD><TD width='1' bgcolor='#C8CFD2'></TD></tr></table>";}function infopt(){return"<tr class='he4'><td></td></tr><tr class='b i f8 far'><td width='10px'></td><td colspan=2>"+mainframe.ln_inf[cpt_inf++]+"</td></tr>";}