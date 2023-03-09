package com.smhrd.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
@AllArgsConstructor
@Data
public class LocationCount {
    private String location;
    private long count;
    private long sum;
}