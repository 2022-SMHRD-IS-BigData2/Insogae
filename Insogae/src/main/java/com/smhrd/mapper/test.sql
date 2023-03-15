select *from COMPANY;

select * from tank;
select*from TANK_DATA_PRE2 order by RECORD_DATE  desc limit 10;

select*from TANK_DATA_PRE order by PRE_RECORD_DATE DESC limit 50;

select*from TANK_DATA_PRE
order by PRE_RECORD_DATE asc limit 12

SET sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
select *  from TANK_DATA_PRE
group by TANK_ID;
order by PRE_RECORD_DATE asc limit 12

SELECT * FROM (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY tank_id ORDER BY PRE_RECORD_DATE DESC) AS row_num
  FROM TANK_DATA_PRE
) AS subquery
WHERE row_num <= 1
ORDER BY tank_id, PRE_RECORD_DATE DESC;




select * from PREDICT_VIEW 
ORDER BY RECORD_DATE DESC LIMIT 8;
